Controller

NestJS główną logikę routów obsługuje w pliku controller.
W pliku controller ustawiamy miejsce główne naszego routa oraz pośredniczące HTTP metody (GET/POST/DELETE/PATCH/PUT)..

Możemy dodatkowo używać różnych elementów typu status kody, headery..

Dobrą praktyką tworzenia path w kontrolerach jest nazywanie kontrolera głównym routem, a metody tylko dopełnieniami.

@Controller("cats)

    @Get("all) <http://localhost:3000/cats/all>..

Do tworzenia konstruktywnych końcówek API warto obejrzeć filmik na temat Rest API.
