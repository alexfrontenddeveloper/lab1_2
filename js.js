$(document).ready(function()
{
    function ALL(name, clas, peresuvannia, contry, caliber, img)
    {                   
        this.result = 0;    
        this.name = name;
        this.img = img;
        this.clas = 
        {
            value: clas,
            percent: 25
        };
        this.contry = 
        {
            value: contry,
            percent: 25
        };
        this.caliber = 
        {
            value: caliber,
            percent: 25
        };
         this.peresuvannia = 
        {
            value: peresuvannia,
            percent: 25
        };
    }
    function L_T(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Танк";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };

        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };

        this.speed_turn_tower = 
        {  
            value: speed_turn_tower,
            percent: 8
        };

        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };

        this.Reservations_tower = 
        {  
            value: Reservations_tower,
            percent: 3
        };

        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    function S_T(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Танк";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };

        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };

        this.speed_turn_tower = 
        {  
            value: speed_turn_tower,
            percent: 8
        };

        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };

        this.Reservations_tower = 
        {  
            value: Reservations_tower,
            percent: 3
        };

        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    function T_T(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Танк";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };

        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };

        this.speed_turn_tower = 
        {  
            value: speed_turn_tower,
            percent: 8
        };

        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };

        this.Reservations_tower = 
        {  
            value: Reservations_tower,
            percent: 3
        };

        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    function P_T(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Протитанкова самохідна артилерійська установка";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };
        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };

        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };

        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    function S_A_U(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Cамохідна артилерійська установка";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };

        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };

        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };

        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    function plans(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Літаків";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };
        this.speed_k = 
        {   
            value: speed_k,
            percent: 10
        };
        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };

        this.speed_turn_tower = 
        {  
            value: speed_turn_tower,
            percent: 8
        };

        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };

        this.Reservations_tower = 
        {  
            value: Reservations_tower,
            percent: 3
        };

        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    function ship(name, clas, peresuvannia, contry, caliber, life, power, speed, speed_k, rul, speed_turn, speed_turn_tower, Reservations_housing, Reservations_tower, damage, proboina, rate, review, connectivity, img) 
    {
        ALL.call(this, name, clas, peresuvannia, contry, caliber, img);
        this.className = "Кораблів";
        this.life = 
        {
            value: life,
            percent: 1.5
        };
        this.power = 
        {
            value: power,
            percent:  10
        };
        this.speed = 
        {   
            value: speed,
            percent: 10
        };
        this.rul = 
        {   
            value: rul,
            percent: 10
        };
        this.speed_turn = 
        { 
            value: speed_turn,
            percent: 5
        };
        this.Reservations_housing = 
        {  
            value: Reservations_housing,
            percent: 3
        };
        this.damage = 
        {
            value: damage,  
            percent: 3
        };
        this.proboina = 
        {  
            value: proboina,
            percent: 3
        };

        this.rate = 
        {  
            value: rate,
            percent: 10
        };
        this.review = 
        {  
            value: review,
            percent: 7.5
        };
        this.connectivity = 
        {
            value: connectivity,
            percent: 7.5
        };
    } 
    var Library = 
    {                                        
        M5Stuart: new L_T("M5 Stuart", "LT", "susha", "USA", "SA50", "350hp",  "350ls", "60k", "nul", "nul", "40gs", "45gsb", "1od", "1odb", "1hpp", "1odm", "1m", "1ob", "1ds", "img/M5_Stuart.png"),
        AMX13_90: new L_T("AMX 13 90", "LT", "susha", "French", "SA50", "1100hp",  "250ls", "60k", "nul", "nul", "40gs", "50gsb", "2od", "2odb", "2hpp", "2odm", "2m", "2ob", "1ds", "img/13_90.png"),
        T54: new S_T("T-54", "CT", "susha", "CCCR", "SA50", "1500hp",  "600ls", "50k", "nul", "nul", "45gs", "50gsb", "3od", "3odb", "3hpp", "3odm", "3m", "3ob", "3ds", "img/T-54.png"),
        wz120: new S_T("WZ-120", "CT", "susha", "China", "60-100T", "1500hp",  "500ls", "55k", "nul", "nul", "45gs", "45gsb", "4od", "4odb", "4hpp", "4odm", "4m", "4ob", "4ds", "img/wz-120.png"),
        IS3: new T_T("ИС 3", "TT", "susha", "CCCR", "BL-9", "1500hp",  "700ls", "35k", "nul", "nul", "30gs", "25gsb", "5od", "4odb", "5hpp", "5odm", "5m", "5ob", "8ds", "img/is-3.png"),
        Maus: new T_T("Maus", "TT", "susha", "Germany", "Mörser 18/1", "3000hp",  "1700ls", "20k", "nul", "nul", "15gs", "15gsb", "6od", "5odb", "6hpp", "6odm", "6m", "4ob", "6ds", "img/maus.png"),
        t95: new P_T("T95", "PT", "susha", "USA", "L/55", "1800hp",  "440ls", "15k", "nul",  "nul","25gs", "15gsb", "7od", "nul", "7hpp", "7odm", "7m", "7ob", "7ds", "img/t95.png"),
        ob268: new P_T("ОБ. 268", "PT", "susha", "CCCR", "60-100T", "1900hp",  "800ls", "30k", "nul", "nul", "25gs", "20gsb", "8od", "8odb", "nul", "8odm", "8m", "7ob", "8ds", "img/ob_268.png"),
        lor: new S_A_U("Lorraine 155 mle. 51", "CAU", "susha", "French", "BL-9", "400hp",  "700ls", "25k", "nul", "nul", "20gs", "35gsb", "9od", "nul", "9hpp", "9odm", "9m", "7ob", "9ds", "img/lor155_51.png"),
        ob261: new S_A_U("ОБ. 261", "CAU", "susha", "CCCR", "SA50", "550hp",  "500ls", "25k", "nul", "nul", "30gs", "25gsb", "10od", "nul", "10hpp", "10odm", "10m", "7ob", "9ds", "img/ob_261.png"),
        /*-------------------------------------------------------------------------*/
        il2: new plans("Ил-2", "plans", "voz", "CCCR", "SA50", "550hp",  "500ls", "25k", "15kre", "nul", "30gs", "nul", "10od", "nul", "10hpp", "10odm", "10m", "7ob", "9ds", "img/ussr-il-2-1.png"),
        zer: new plans("Mitsubishi A6M2 Zero", "plans", "voz", "Japan", "SA50", "550hp",  "500ls", "25k", "20kre", "nul", "30gs", "nul", "10od", "nul", "10hpp", "10odm", "10m", "7ob", "9ds", "img/Plane_a6m2.png"),
        /*-------------------------------------------------------------------------*/
        fletcher: new ship("Fletcher", "ship", "more", "USA", "SA50", "550hp",  "500ls", "25k", "nul", "10s", "30gs", "nul", "10od", "nul", "10hpp", "10odm", "10m", "7ob", "9ds", "img/Baltimore_1944.png"),
        Grober: new ship("Großer Kurfürst", "ship", "more", "Germany", "SA50", "550hp",  "500ls", "25k", "nul", "25s", "30gs", "nul", "10od", "nul", "10hpp", "10odm", "10m", "7ob", "9ds", "img/Grosse.png")
    };
    $('#check').click(function()
    {
        var Setting = {};

        $('.list select:enabled').each(function()
        {                                        
            Setting[$(this).attr("id")] = $(this).val();
        });

        $('.list input:not(.checkbox):enabled:checkbox').each(function()
        {
            Setting[$(this).attr("id")] = $(this).prop('checked');
        });
        var Excerpt = {};                                                   // 
        for (var obj in Library) 
        {
            for (var  prop in Setting) 
            {
                if (prop in Library[obj])
                { 
                    if (Library[obj][prop].value == Setting[prop] || Library[obj][prop].value.toString().indexOf(Setting[prop])>=0) 
                    { 
                        if (!Excerpt.hasOwnProperty(obj)) 
                        {                              
                            Excerpt[obj] = jQuery.extend(true, {}, Library[obj]);     
                        }
                        Excerpt[obj].result += Excerpt[obj][prop].percent;        
                    } 
                }
            }
        }
        var Result = 
        {
            max: 0.0001,
            name: [],
            img: []
        };
        for (var obj in Excerpt)
        {
            if (Excerpt[obj].result > Result.max)
            {
                Result = 
                {
                    max: 0,
                    name: [],
                    class: [],
                    img: []
                };
                Result.max = Excerpt[obj].result;
                Result.name.push(Excerpt[obj].name);
                Result.class.push(Excerpt[obj].className);
                Result.img.push(Excerpt[obj].img);
            } 
            else if (Excerpt[obj].result == Result.max)
            {
                Result.name.push(Excerpt[obj].name);
                Result.class.push(Excerpt[obj].className);
                Result.img.push(Excerpt[obj].img);
            }
        }
        console.log("Відповідь:  " + Result.name);
        $('.result .content').html(" ");
        if (Result.name.length<1)
        {
            $('.result .content').append('<div class="error">Вибачте але за вашим запитом нічого не знайдено.</div> ');
        } else if (Result.name.length==1)
        {
            $('.result .content').append('<div class="resultText">'+Result.name+'</div><div class="resalt_img"><img src="'+Result.img+'"></div><div class="classText">Відноситься до классу "'+Result.class+'"</div>');
        } else if (Result.name.length>1)
        {
            $('.result .content').append('<div class="error">Є декілька можливих варіантів. Виберіть підходящий варіант:</div><div class="container"></div>');
            for (var i = 0; i<Result.name.length; i++)
            {
                $('.result .content .container').append('<a href="#" data-img="'+i+'">'+Result.name[i]+'</a>');
            }
            $('a[data-img]').click(function()
            {
                var x = $(this).data('img');
                $('.result .content').html(" ");
                $('.result .content').append('<div class="resultText">'+Result.name[x]+'</div><div class="resalt_img"><img src="'+Result.img[x]+'"></div><div class="classText">Відноситься до классу "'+Result.class[x]+'"</div>');
            });
        }
    });
    $('.info').click(function()
    {
        $(this).find('.infoText').toggle();
    });
    $('#reset').click(function(){
        $('.list input.checkbox').prop( "checked", false );
        $('.list input:not(:checked)').next().next().prop( "disabled", true );
    });
});