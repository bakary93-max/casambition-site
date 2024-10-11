from django.contrib import admin
from .models import CustomUser, Item

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_admin')  # Attributs à afficher
    search_fields = ('username', 'email')  # Champs pour la recherche

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ('name',)  # Attributs à afficher
    search_fields = ('name',)  # Champs pour la recherche