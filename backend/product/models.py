from django.db import models

class Product(models.Model):
    productId = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=120)
    price = models.IntegerField()

    def __str__(self):
        return self.name + str(self.price)
