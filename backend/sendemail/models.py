from django.db import models

class Sendemail(models.Model):
  name = models.CharField(max_length=120)
  email = models.EmailField(max_length=120)
  phone = models.CharField(max_length=120, blank=True)
  subject = models.CharField(max_length=120, blank=True)
  message = models.TextField()

  def _str_(self):
    return self.title
