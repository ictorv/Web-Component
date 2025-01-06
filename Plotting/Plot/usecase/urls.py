from django.urls import path
from .views import ChartDataAPIView

urlpatterns = [
    path('api/chart-data/', ChartDataAPIView.as_view(), name='chart_data'),
]
