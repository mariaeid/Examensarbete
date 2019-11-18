from django.db import models

class Product(models.Model):
    productId = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=120)
    price = models.IntegerField()
    image = models.ImageField(upload_to='images/', null=True)

    def __str__(self):
        return self.name + str(self.price)
