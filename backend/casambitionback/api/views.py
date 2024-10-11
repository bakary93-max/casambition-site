# api/views.py
from rest_framework import viewsets
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from rest_framework.response import Response
import logging
from django.http import JsonResponse
from .models import Item
from .serializers import ItemSerializer, ProjectSerializer
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAdminUser

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_staff:  # Vérifier si l'utilisateur est un administrateur
                return Response({'message': 'Connexion réussie, vous êtes admin.', 'isAdmin': True})
            else:
                return Response({'message': 'Connexion réussie, mais vous n\'êtes pas admin.', 'isAdmin': False})
        else:
            return Response({'message': 'Échec de la connexion'}, status=400)
        


class ProjectCreateView(APIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

# Créer un logger
logger = logging.getLogger(__name__)

@api_view(['POST'])
def send_contact_email(request):
    try:
        data = request.data
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        logger.info(f"Received contact form: Name={name}, Email={email}, Message={message}")

        # Envoyer l'email
        send_mail(
            subject=f"Message de {name}",
            message=message,
            from_email=email,
            recipient_list=['saneb2580@gmail.com'],
            fail_silently=False,
        )

        logger.info("Email envoyé avec succès !")
        return JsonResponse({'success': 'Email envoyé avec succès !'})

    except Exception as e:
        logger.error(f"Erreur lors de l'envoi de l'email : {e}")
        return JsonResponse({'error': 'Une erreur est survenue lors de l\'envoi du message.'}, status=500)


@api_view(['POST'])
def add_project(request):
    # Exemple de logique pour ajouter un projet
    project_name = request.data.get('name')
    project_description = request.data.get('description')

    # Ajout du projet à la base de données (à adapter selon ton modèle)
    # Project.objects.create(name=project_name, description=project_description)

    return Response({'message': 'Projet ajouté avec succès !'})