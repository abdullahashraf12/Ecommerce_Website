                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size")  ):

                    if((str(price_range) != "All Prices" and str(price_range) != "")):
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        print("price_range "+str(price_range))
                        print("color "+str(color))
                        print("size "+str(size))
                        return JsonResponse(my_product_,safe=False)

                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                

                

                #  Color & Price Both Are Null > Then Check Value of Size if it was true or false 
                elif((str(color)=="" or str(color)=="All Color") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(size) != "All Size" and str(size) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size_of_clothes=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size=0).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)


                #  Price & Size Both Are Null > Then Check Value of Color if it was true or false 
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(color) != "All Color" and str(color) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=str(color)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=0).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                
                

                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) != "All Prices" or str(price_range) != "") and (str(color)!="" or str(color)!="All Color")):                    
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color=str(color)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                
                

                #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):

                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=str(color),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)

                



                if((str(color)!="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):

                    
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=str(color),size_of_clothes=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)





                if((str(color)=="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):

                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)



                if((str(color)!="" or str(color)!="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):

                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color=str(color),size_of_clothes=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)



                    