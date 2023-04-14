from django.db import models

# Create your models here.

class Todo(models.Model):
    Username = models.CharField(max_length=120)
    Password = models.CharField(max_length=120)

    def _str_(self):
        return self.Username