from django.db import models

from django.db import models

class Steps(models.Model):
  number = models.IntegerField()
  title = models.CharField(max_length=120)
  description = models.TextField()
  icon = models.ImageField(upload_to='images/', null=True)

  def _str_(self):
    return self.title
