from rest_framework import viewsets

from .models import Doctor
from .permissions import IsAdminOrOwnerDoctorOrReceptionistReadOnly
from .serializers import DoctorSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.select_related("user", "department").all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAdminOrOwnerDoctorOrReceptionistReadOnly]
