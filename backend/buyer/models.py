from django.db import models

class Buyer(models.Model):
  first_name = models.CharField(max_length=120)
  last_name = models.CharField(max_length=120)
  street_address = models.CharField(max_length=120)
  zip_code = models.CharField(max_length=120)
  city = models.CharField(max_length=120)
  phone = models.CharField(max_length=12)
  user_name = models.CharField(max_length=120)

  def _str_(self):
    return self.title
