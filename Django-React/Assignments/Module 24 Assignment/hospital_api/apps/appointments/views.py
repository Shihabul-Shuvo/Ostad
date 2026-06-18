from rest_framework import viewsets

from apps.users.models import User

from .models import Appointment
from .permissions import CanBookAppointment, IsAppointmentOwnerOrAdminOrReceptionist
from .serializers import AppointmentSerializer


class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.select_related("patient__user", "doctor__user").all()
    serializer_class = AppointmentSerializer
    permission_classes = [CanBookAppointment, IsAppointmentOwnerOrAdminOrReceptionist]
    filterset_fields = ["doctor", "patient", "status", "appointment_date"]

    def get_queryset(self):
        queryset = super().get_queryset()
        user = self.request.user
        if user.role in (User.Role.ADMIN, User.Role.RECEPTIONIST):
            return queryset
        if user.role == User.Role.DOCTOR:
            return queryset.filter(doctor__user=user)
        if user.role == User.Role.PATIENT:
            return queryset.filter(patient__user=user)
        return queryset.none()
