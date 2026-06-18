from rest_framework import viewsets

from apps.users.models import User

from .models import Bill
from .permissions import CanAccessBilling
from .serializers import BillSerializer


class BillViewSet(viewsets.ModelViewSet):
    queryset = Bill.objects.select_related("patient__user").all()
    serializer_class = BillSerializer
    permission_classes = [CanAccessBilling]

    def get_queryset(self):
        queryset = super().get_queryset()
        user = self.request.user
        if user.role == User.Role.PATIENT:
            return queryset.filter(patient__user=user)
        return queryset
