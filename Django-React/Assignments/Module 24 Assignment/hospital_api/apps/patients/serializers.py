from rest_framework import serializers

from apps.users.models import User
from apps.users.serializers import UserSerializer

from .models import Patient


class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), source="user", write_only=True
    )

    class Meta:
        model = Patient
        fields = [
            "id",
            "user",
            "user_id",
            "age",
            "gender",
            "blood_group",
            "address",
            "phone",
        ]

    def validate_age(self, value):
        if value < 0:
            raise serializers.ValidationError("Age must be >= 0.")
        return value
