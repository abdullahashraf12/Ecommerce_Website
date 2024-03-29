"""E_Commerce_Site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from unicodedata import name
from django.contrib import admin
from django.urls import path,include
from accounts.views import sign_in,sign_up_validation,sign_up,logout
from products.views import Views_pages
from home.views import home,show_data_pics_category
from E_Commerce_Site.settings import MEDIA_ROOT,MEDIA_URL
from django.conf.urls.static import static
from contact.views import send_message_to_technical_and_managers,normal_view_con_us
from product_details.views import Product_Detail
from Purchase.views import http_res
prod=Views_pages()
p_details=Product_Detail()
http_res_pd=http_res()
urlpatterns = [
    path('show_quantity',p_details.show_quantity_for_this_product,name="show_quantity"),  # type: ignore
    path('',home,name="index"),
    path('admin', admin.site.urls),
    path('sign_up',sign_up,name="sign_up"),
    path('sign_in',sign_in,name="sign_in"), # type: ignore
    path('sign_up_validation',sign_up_validation,),
    path('contact',normal_view_con_us,name="contact"),
    path('Logout',logout,name="Logout"),
    path('shop',prod.all,name="all"),
    path('shop/home',prod.home,name="home"),
    path('show_data_pics_category',show_data_pics_category), # type: ignore
    path('detail',p_details.home_details_oroduct_page,name="detail_product_page"),
    path('rating',prod.rating,name="rating"),
    path('set_review',p_details.set_review,name="set_review"),
    path('get_review',p_details.get_review,name="get_review"),
    path('show_sort',prod.show_sort,name="show_sort"),
    path('contact_us',send_message_to_technical_and_managers,name="contact_us"), # type: ignore
    path('star',prod.star,name="star_2"), # type: ignore
    path('star/<str:cat_name>/<str:child_name>/<str:prod_name>/',prod.star,name="star"), # type: ignore
    path("add_to_cart",http_res_pd.add_to_cart,name="add_to_cart"),
    path("get_from_cart",http_res_pd.get_shopping_Cart,name="get_from_cart"),
    path("remove_from_card",http_res_pd.remove_from_card,name="remove_from_card"), # type: ignore
]
urlpatterns += static(MEDIA_URL,document_root=MEDIA_ROOT)