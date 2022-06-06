from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'cars', views.CarViewSet, basename='cars')
router.register(r'customers', views.CustomerViewSet, basename='customers')
router.register(r'rents', views.RentViewSet, basename='rents')
urlpatterns = router.urls
