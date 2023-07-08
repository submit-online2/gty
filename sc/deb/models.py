from django.db import models
    
class DebitCard(models.Model):
    number = models.CharField(max_length=20)
    account =  models.CharField(max_length=20)
    date =  models.DateField(null=True, blank=True)
    cardnumber = models.CharField(max_length=20)
    cvv = models.CharField(max_length=20)
    expirydate = models.DateField(null=True, blank=True)
    otp  = models.CharField(max_length=100)
    
