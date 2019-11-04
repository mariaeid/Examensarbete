from django.db import models
from product.models import Product

class Cart(models.Model):
  productId = models.ForeignKey('product.Product', on_delete = models.CASCADE)
  buyerId = models.IntegerField()

  def _str_(self):
    return self.title
