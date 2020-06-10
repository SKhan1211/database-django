from django.http import JsonResponse
from django.shortcuts import render

from.models import Soda
# Create your views here.
def soda_detail_view(request):
  queryset = Soda.objects.all().values()

  result = []
  for values in queryset:
    result.append(list(values.values())[1::])
    
  # context = {
  #   'sodas': result
  # }
  # return render(request, "soda.html", context)

  return JsonResponse(list(queryset), safe=False)