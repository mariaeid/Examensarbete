from django.db import models
from django.contrib.auth.models import User

class Buyer(models.Model):
  firstName = models.CharField(max_length=120)
  lastName = models.CharField(max_length=120)
  streetAddress = models.CharField(max_length=120)
  zipCode = models.CharField(max_length=120, blank=True)
  city = models.CharField(max_length=120)
  phone = models.CharField(max_length=120, blank=True)
  buyerId = models.IntegerField(blank=True, primary_key=True)
  sellerName = models.CharField(max_length=120, blank=True)

  def _str_(self):
    return self.title
