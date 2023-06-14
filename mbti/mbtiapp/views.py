from django.http import JsonResponse
from django.shortcuts import redirect, render
from .models import Answer
from .models import Question
from .models import MBTI
from .demo import main as model

def index(request):
	return render(request, 'index.html')

def result(request):
    answers = []
    for x in Answer.objects.values('context').values_list():
        answers.append(x[1])
    
    pred = model(answers)
    result = pred.pop()
    # print(result)
    
    # Get the MBTI description from model
    context = MBTI.objects.all().get(mbti=result).to_json()
    context['pj'] = pred.pop()
    context['tf'] = pred.pop()
    context['ns'] = pred.pop()
    context['ei'] = pred.pop()
    
    print(context)
    return render(request, 'result/result.html', context)

# Load the Question form
def question(request):
    # 1. First Answer
    if Answer.objects.exists() == False:
        next_id = 1
        answer = Answer.objects.create(id=next_id, context="")
    # 2. Another Answer
    else:
        next_id = Answer.objects.last().id
        answer = Answer.objects.all().get(id=next_id)

    question = Question.objects.all().get(id=next_id)
    
    context = { 'question': question, 'answer': answer }
    return render(request, 'question/question_list.html', context)

# Get the request from JS/HTML
def nextform(request):
    # 1. Question: Get Next object
    next_id = request.GET.get('question[id]')
    next_subject = Question.objects.all().get(id=next_id).subject
    
    # 2-1. Answer: Save the object
    answer = Answer(id=request.GET.get('answer[id]'), context=request.GET.get('answer[context]'))
    answer.save()
    
    # 2-2. Answer: Create Next object
    Answer.objects.create(id=next_id, context="")
    
    context = { 
               'question': {
                    'id': next_id,
                    'subject': next_subject
                }, 
               'answer': {
                   'id': next_id,
                   'context': ""
               } 
    }
    return JsonResponse(context)

def clear(request):
    Answer.objects.all().delete()

    return redirect('/')
    