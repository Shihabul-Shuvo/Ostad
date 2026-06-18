from rest_framework import viewsets

from .models import Patient
from .permissions import IsAdminOrReceptionistOrOwnerPatientOrDoctorReadOnly
from .serializers import PatientSerializer


class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.select_related("user").all()
    serializer_class = PatientSerializer
    permission_classes = [IsAdminOrReceptionistOrOwnerPatientOrDoctorReadOnly]
