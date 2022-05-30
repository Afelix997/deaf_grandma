def deaf_grandma():
    byes=0
    while byes < 2:
        user_input=input('HEY KID!')
        if user_input == "":
            print("WHAT?")
        elif not user_input.isupper():
            print('SPEAK UP KID!')
        elif user_input.isupper() and user_input != 'GOODBYE!':
            print('NO NOT SINCE 1946!')
        elif user_input == 'GOODBYE!' and byes < 1:
            print('LEAVING SO SOON?')
            byes +=1
        elif user_input == 'GOODBYE!':
            print('LATER SKATER!')
            break

deaf_grandma()
