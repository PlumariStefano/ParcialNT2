
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formstate : {},
      formData : this.getDataInicial(),
      importes : [],
      importeTotal:0,
      nombreMinLength : 3,
      nombreMaxLength : 15
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    getDataInicial() {
      return {
        nombre : '',
        descrip: '',
        importe:'',
        presupuesto:''
      }
    },
    enviar() {
      let importe = {...this.formData}
      importe.fecha = new Date().toLocaleString()

      console.log(importe)
      this.importes.push(importe)
      this.importeTotal+=importe.importe
      this.formData = this.getDataInicial()
      this.formstate._reset()
    },
    analizarImporteTotal() {
    
      let color = '#008000'
      if(this.importeTotal <= this.formData.presupuesto){
        color ='#ff0000'
      }
      if(this.importeTotal >1000 && this.importeTotal <5000) {
        color = '#ff00ff'
      }
      if(this.importeTotal > 5000) {color = '#ffa500'
      }
      
      return {
        valor : this.importeTotal,
        color
      }
    }
  }
}


