from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.student_list),  # For GET and POST (list and add)
    path('students/<int:pk>/', views.student_detail),  # For DELETE
]
