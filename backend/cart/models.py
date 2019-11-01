from django.db import models

class Cart(models.Model):
  productId = models.IntegerField()
  buyerId = models.IntegerField()

  def _str_(self):
    return self.title
