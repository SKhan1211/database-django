from django.db import models

# Create your models here.
class Soda(models.Model):
  order = models.IntegerField()
  tenant_id = models.TextField()
  display_name = models.TextField()
  db_host = models.TextField()
  db_instance = models.TextField()
  status = models.TextField()
  time =  models.TextField()
  errors = models.IntegerField()