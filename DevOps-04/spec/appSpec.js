import { Main } from '../src/app.js';

describe("Ligne simple min", function() {
    let main = new Main();
    let dateMinute = new Date().getMinutes();

    
    it("doit return 1 quand je donne 1", function() {
        let result = main.ligneTouteEnBas(dateMinute);
        console.log(dateMinute);
        expect(result).toBe("Lampe 1 en bas jaune allumé");
    });

    it("Doit return 2 quand je donne 2", function(){

        let result = main.ligneTouteEnBas(dateMinute);

        expect(result).toBe("Lampe 2 en bas jaune allumé");
    })

    it("Doit return 3 quand je donne 3", function(){

        let result = main.ligneTouteEnBas(dateMinute);

        expect(result).toBe("Lampe 3 en bas jaune allumé");
    })

    it("Doit return 4 quand je donne 4", function(){

        let result = main.ligneTouteEnBas(dateMinute);

        expect(result).toBe("Lampe 4 en bas jaune allumé");
    })
});

