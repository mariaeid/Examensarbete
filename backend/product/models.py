from django.db import models

class Product(models.Model):
      productId = models.IntegerField(unique=True)
      name = models.CharField(max_length=120, unique=True)
      price = models.IntegerField()

      def _str_(self):
        return self.title
