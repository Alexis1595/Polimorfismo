package com.bootcamp;

public class PolimorfismoMain {

    public static void main(String[] args) {

        //Coche coche1 = new Coche();

        CocheElectrico coche2 = new CocheElectrico("rojo", "honda", "civic", "1430,45", "5,4");

        CocheHibrido coche3 = new CocheHibrido();

        //polimorfismo

        Coche coche4 = new CocheElectrico("rojo", "honda", "civic", "1430,45", "5,4");

        Coche coche5 = new CocheHibrido();

        if (coche4 instanceof CocheElectrico){
            System.out.println("coche electrico");

        }
        if (coche4 instanceof CocheHibrido){
            System.out.println("coche hibrido");

        }



    }


}
