from django.db import models

class MainContent(models.Model):
    siteTitle = models.CharField(max_length=120)
    titlePart1 = models.CharField(max_length=120)
    textPart1 = models.TextField(null=True)
    titlePart2 = models.CharField(max_length=120)
    textPart2 = models.TextField(null=True)
    titlePart3 = models.CharField(max_length=120)
    textPart3 = models.TextField(null=True)

    def _str_(self):
        return self.title
