import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mbti.settings')

import django
django.setup()

from mbtiapp.models import MBTI
from mbtiapp.models import Question

def saveQuestion():
    file = open('mbtiapp/static/init_question.txt', 'r')
    while True :
        new_id = file.readline()[:-1]
        if not new_id : break
        new_subject = file.readline()[:-1]
        # save question
        Question.objects.update_or_create(id=int(new_id), subject=new_subject)
        # obj.save()
    file.close()

def saveMbti():    
    file = open('mbtiapp/static/init_desc.txt', 'r')
    # lines = file.readlines()
    while True :
        new_mbti = file.readline()[:-1]
        if not new_mbti: break
        else:
            new_type = file.readline()[:-1]
            new_mind = file.readline()[:-1]
            
            MBTI.objects.update_or_create(mbti=new_mbti, type=new_type, mind=new_mind)
            # obj.save()

    file.close()  
    
saveMbti()
saveQuestion()
        