# from django import forms 
# from django.core.validators import validate_slug, validate_email

# from . import models
# def must_be_caps(value):
#     if not value.isupper():
#         raise forms.ValidationError("Not all upper case")
#     #Always return the cleaned data
#     return value

# def must_be_fifteen(value):
#     if len(value) > 15:
#         raise forms.ValidationError("Needs to be less than 15 characters")
#     #Always return the cleaned data
#     return value

# class SuggestionForm(forms.Form):
#     suggestion_field = forms.CharField(
#         label = 'Suggestion', 
#         max_length=240,
#         validators=[
#             validate_slug,
#             #must_be_caps,
#             must_be_fifteen,
#             #validate_email
#             ]
#     )

#     def save(self, request):
#         suggestion_instance = models.SuggestionModel()
#         suggestion_instance.suggestion = self.cleaned_data["suggestion_field"]
#         suggestion_instance.author = request.user
#         suggestion_instance.save()