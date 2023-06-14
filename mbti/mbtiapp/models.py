from django.db import models

class Question(models.Model):
    id = models.IntegerField(primary_key=True, default=0)
    subject = models.TextField(default="")
    
    def to_json(self):
    	return {
            "id": self.id,
            "subject": self.subject
        }
class Answer(models.Model):
    id = models.IntegerField(primary_key=True)
    context = models.TextField(default="")

    def to_json(self):
    	return {
            "id": self.id,
            "context": self.context
        }
     
     
class MBTI(models.Model):
    mbti = models.TextField(default="")
    type = models.TextField(default="")
    mind = models.TextField(default="")
    
    def __str__(self):
        return self.mbti
    
    def to_json(self):
    	return {
            "mbti": self.mbti,
            "type": self.type,
            "mind": self.mind
        }