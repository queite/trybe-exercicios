class Tv:
    def __ini__(self, _tamanho):
        self._volume = 50
        self._canal = 1
        self._tamanho = _tamanho
        self._ligada = False

    def aumentar_volume(self):
        if self._volume < 99:
            self._volume += 1
        else:
            raise ValueError('Volume máximo: 99')

    def diminuir_volume(self):
        if self._volume <= 0:
            self._volume -= 1
        else:
            raise ValueError('Sem volume')

    def modificar_canal(self, canal):
        if canal < 1 or canal < 99:
            raise ValueError('Canal inexistente')
        self._canal = canal

    def ligar_desligar(self):
        self._ligada = not self._ligada
