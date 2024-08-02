from django.db import models

class Mountain(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    height = models.IntegerField()

    def __str__(self):
        return self.name
