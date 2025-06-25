import pytest
import math
from nivel2 import *


def test_area_circulo():
    assert area_circulo(1) == math.pi
    assert area_circulo(0) == 0
    with pytest.raises(ValueError):
        area_circulo(-1)

def test_factorial():
    assert factorial(0) == 1
    assert factorial(5) == 120
    with pytest.raises(ValueError):
        factorial(-1)

def test_ecuacion_cuadratica():
    assert ecuacion_cuadratica(1, 0, -1) == (1, -1)
    assert ecuacion_cuadratica(1, -5, 6) == (3, 2)
    assert ecuacion_cuadratica(1, 2, 5) == None

def test_mcd():
    assert mcd(48, 60) == 12
    assert mcd(17, 5) == 1
    assert mcd(0, 5) == 5

def test_promedio():
    assert promedio([1, 2, 3, 4, 5]) == 3
    assert promedio([10]) == 10
    with pytest.raises(ValueError):
        promedio([])

def test_volumen_esfera():
    assert volumen_esfera(1) == pytest.approx(4.18879, rel=1e-5)
    assert volumen_esfera(0) == 0
    with pytest.raises(ValueError):
        volumen_esfera(-1)

def test_suma_pares():
    assert suma_pares(10) == 30
    assert suma_pares(1) == 0
    assert suma_pares(0) == 0