import CalendarLocale from 'rc-picker/lib/locale/es_ES';
import dayjs from 'dayjs';
import TimePickerLocale from '../../TimePicker/locales/es';
import { PickerLocale } from '../generatePicker';

const dayjsLocale = {
  name: 'es',
  monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
  weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
  weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
  months:
    'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
      '_',
    ),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
  },
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
  ordinal: (n: number): string => `${n}º`,
};

dayjs.locale(dayjsLocale, undefined, true);

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Seleccionar fecha',
    rangePlaceholder: ['Fecha inicial', 'Fecha final'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

export default locale;
