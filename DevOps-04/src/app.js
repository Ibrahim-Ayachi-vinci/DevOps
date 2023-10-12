export class Main {
    ligneTouteEnBas (number) {
        let nombreMin
        if (number % 5 === 0){
            nombreMin = number/5;
        }else{
            if (number % 5 === 1){
                return "Lampe 1 en bas jaune allumé";
            };

            if (number % 5 === 2){
                return "Lampe 2 en bas jaune allumé"
            }
            if (number % 5 === 3){
                return "Lampe 3 en bas jaune allumé"
            }
            if (number % 5 === 4){
                return "Lampe 4 en bas jaune allumé"
            }
        };
        
}
}
