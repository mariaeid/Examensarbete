from django.db import models

from django.db import models

class Steps(models.Model):
  number = models.IntegerField()
  title = models.CharField(max_length=120)
  description = models.TextField()

  def _str_(self):
    return self.title
