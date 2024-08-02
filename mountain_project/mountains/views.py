from django.shortcuts import render
from .models import Mountain

def index(request):
    mountains = Mountain.objects.all()
    return render(request, 'mountains/index.html', {'mountains': mountains})
