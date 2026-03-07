from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class ProtectedDataApi(APIView):
    permission_classes=[IsAuthenticated]

    def get(self, request):
        return Response({
            "message": "Authentication successful!",
            "user": request.user.username,
            "secret_code": "42-is-the-answer"
        })


