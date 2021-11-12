from django.db import models

class Group(models.Model):
    name = models.CharField(max_length=32, null=False, unique=False)
    location = models.CharField(max_length=40, null=False)
    description = models.TextField(max_length=256, null=False)

    class Meta:
        unique_together = (('name', 'location'))

    def __str__(self):
        return self.name
    

class Event(models.Model):
    team1 = models.CharField(max_length=32, null=False)
    team2 = models.CharField(max_length=32, null=False)
    time = models.DateTimeField(null=False, blank=False)
    score1 = models.IntegerField(null=False, blank=False)
    score2 = models.IntegerField(null=False, blank=False)
    group = models.ForeignKey(Group, related_name='events', on_delete=models.CASCADE)
