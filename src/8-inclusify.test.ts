import {inclusify} from "./8-inclusify";
import {describe,expect, test} from "vitest";

describe('inclusify', () => {
test("il/elle are properly replaced", () => {
    expect(inclusify("Aujourd'hui elle a push le code sur github")).toBe("Aujourd'hui iel a push le code sur github");
    expect(inclusify("Il a bu un café")).toBe("Iel a bu un café");
    expect(inclusify("Il a mangé tout les chocolats et elles ont été en racheter.")).toBe(
        "Iel a mangé tout les chocolats et iels ont été en racheter."
    );
    expect(inclusify("Ils se sont mis du mascara sur les cils")).toBe("Iels se sont mis du mascara sur les cils");
    expect(inclusify("Il est venu, il a vu, il a vaincu")).toBe("Iel est venu, iel a vu, iel a vaincu");
    expect(inclusify("Elle est allé sur l'île.")).toBe("Iel est allé sur l'île.");
});

test("already inclusified sentences should change", () => {
    expect(inclusify("Aujourd'hui iel a push le code sur github")).toBe("Aujourd'hui iel a push le code sur github");
    expect(inclusify("Iel a bu un café")).toBe("Iel a bu un café");
});

test("Test pour ceux et celles", () => {
    expect(inclusify("Celles qui trouvent cela injuste peuvent aller voir ailleurs")).toBe("Celleux qui trouvent cela injuste peuvent aller voir ailleurs");
    expect(inclusify("Ils sont parmi ceux qui ont été les plus actifs")).toBe("Iels sont parmi celleux qui ont été les plus actifs")
})
    
})

// TODO: write similar tests celleux