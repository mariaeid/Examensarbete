from django.db import models

# add this
class EnvironmentalProject(models.Model):
  title = models.CharField(max_length=120)
  intro = models.TextField(null=True)
  fullDescription = models.TextField(null=True)
  image = models.ImageField(upload_to='images/', null=True)

  def _str_(self):
    return self.title
