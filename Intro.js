var storyContent = ﻿{"inkVersion":20,"root":[["^You have been employed as a Digital Immigration Offical to help process applications of people trying to move to New Zealand. Good luck.","\n","ev","str","^Begin","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"Day1":[[["^Russel: \"Welcome aboard newbie, its busy around here so glad to have you. There's not much too it, check the policies and keep out the bad eggs. I'll drop you a line every morning to keep you updated on changes to the rules\"","\n",["ev",{"^->":"Day1.0.g-0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^OK ",{"->":"$r","var":true},null]}],["ev",{"^->":"Day1.0.g-0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^What if I need help?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Day1.0.g-0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Day1.0.g-1"},{"#f":5}],"c-1":["ev",{"^->":"Day1.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Day1.0.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^Russel: \"There's not much too it, just read the policy. I can't help you, I'm busy too. Do your best.\"","\n",["ev",{"^->":"Day1.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^OK",{"->":"$r","var":true},null]}],{"c-2":["ev",{"^->":"Day1.0.g-1.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^Russel: \"Looks like your first one will be easy, an Australian who clicked the \"I am a terrorist box\", stupid thing, what terrorist would be honest? But rules are rules, so better make sure.\"","\n","end",{"#f":5}],"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};