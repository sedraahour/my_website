/*بيانات الفعاليات: مصفوفات متوازية، رقم الفعالية = الفهرس + 1  */
var titles = new Array("ملتقى التوظيف الجامعي", "بطولة كرة القدم بين الكليات", "الأمسية الثقافية الطلابية", "يوم النشاطات الطلابية", "ورشة مهارات البحث العلمي", "دوري كرة السلة بين الكليات", "معرض مشاريع التخرج", "مسابقة المواهب الطلابية");
var cats = new Array("أكاديمي", "رياضة", "ثقافة", "طلابي", "أكاديمي", "رياضة", "أكاديمي", "طلابي");
var dates = new Array("2026-10-27", "2026-10-29", "2026-11-01", "2026-11-04", "2026-11-08", "2026-11-12", "2026-11-16", "2026-11-20");
var places = new Array("قاعة المؤتمرات", "الملعب الجامعي", "المسرح الجامعي", "ساحة الجامعة", "المكتبة الجامعية", "الصالة الرياضية", "قاعة المؤتمرات", "المسرح الجامعي");
var times = new Array("9:00 ص – 3:00 م", "4:00 م – 8:00 م", "6:00 م – 9:00 م", "10:00 ص – 2:00 م", "11:00 ص – 1:00 م", "3:00 م – 7:00 م", "9:00 ص – 4:00 م", "5:00 م – 9:00 م");
var startH = new Array(9, 16, 18, 10, 11, 15, 9, 17);   /* ساعة البدء */
var endH = new Array(15, 20, 21, 14, 13, 19, 16, 21);   /* ساعة الانتهاء */
var featured = new Array(1, 1, 1, 1, 0, 0, 0, 0);        /* فعالية بارزة تظهر في السلايدر */
var orgs = new Array("عمادة شؤون الطلبة ومركز الخريجين", "دائرة النشاط الرياضي", "نادي الثقافة والأدب", "اتحاد الطلبة", "المكتبة الجامعية", "دائرة النشاط الرياضي", "كليات الجامعة", "اتحاد الطلبة");
var auds = new Array("الطلبة والخريجين", "الجميع", "الجميع", "طلبة الجامعة", "طلبة البكالوريوس والدراسات العليا", "الجميع", "طلبة السنة الأخيرة والزوار", "طلبة الجامعة");
var shorts = new Array(
  "لقاء الطلبة والخريجين مع شركات ومؤسسات محلية.",
  "مباريات حماسية بين فرق كليات الجامعة.",
  "أمسية شعر وموسيقى بمشاركة طلبة الجامعة.",
  "تعرّف على الأندية والنشاطات الطلابية وانضم إليها.",
  "ورشة للتعريف بقواعد البيانات وأساليب البحث.",
  "مباريات كرة سلة بين فرق الكليات.",
  "عرض مشاريع تخرج الطلبة وتقييمها أمام لجنة وزوار.",
  "عروض غناء وتمثيل ومهارات متنوعة للطلبة.");
var longs = new Array(
  "يوم كامل يضم أجنحة لعدة شركات، ومقابلات تعريفية، وورش لكتابة السيرة الذاتية والتحضير للمقابلات. الدخول مجاني لطلبة الجامعة.",
  "تتنافس فرق الكليات بنظام خروج المغلوب، ويُقام النهائي في اليوم الأخير بحضور الجمهور وتوزيع الكؤوس على الفرق الفائزة.",
  "أمسية يقدّم فيها الطلبة قصائد ومقطوعات موسيقية ومشاهد قصيرة، في أجواء ثقافية تعكس مواهب أبناء الجامعة.",
  "تُقام أكشاك للأندية والجمعيات الطلابية مع عروض ومسابقات وهدايا، لتتعرف على النشاطات المتاحة وتسجّل في ما يناسبك.",
  "ورشة عملية تعرّف الطلبة بقواعد البيانات العلمية وطرق البحث والتوثيق وتجنّب الانتحال، يقدمها مختصون من المكتبة.",
  "دوري بين فرق الكليات بنظام النقاط، وتُقام المباراة النهائية في اليوم الأخير بحضور الجمهور.",
  "يعرض طلبة السنة الأخيرة مشاريعهم أمام لجنة تحكيم وزوار الجامعة، مع جوائز لأفضل المشاريع في كل تخصص.",
  "مسابقة مفتوحة لجميع الطلبة تضم الغناء والتمثيل والرسم ومهارات أخرى، وتُمنح جوائز للمراكز الأولى بتصويت لجنة التحكيم والجمهور.");
var COUNT = titles.length;

/* ===== دوال مساعدة ===== */

/* لون شارة التصنيف   */
function badgeClass(cat) {
  if (cat == "أكاديمي") { return "bg-primary"; }
  if (cat == "رياضة") { return "bg-success"; }
  if (cat == "ثقافة") { return "bg-info text-dark"; }
  return "bg-warning text-dark";
}

/* تاريخ اليوم بالشكل 2026-10-27  */
function todayString() {
  var d = new Date();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  if (m < 10) { m = "0" + m; }
  if (day < 10) { day = "0" + day; }
  return d.getFullYear() + "-" + m + "-" + day;
}

/* تابع يبين الحدث في يوم محدد */
function isToday(i) { return dates[i] == todayString(); }

/* شارة التصنيف + شارة "الحدث اليوم" عند الحاجة  */
function catBadge(i) {
  var s = '<span class="badge ' + badgeClass(cats[i]) + '">' + cats[i] + '</span>';
  if (isToday(i)) { s += ' <span class="badge bg-danger">الحدث اليوم</span>'; }
  return s;
}

/* بطاقة فعالية تُستخدم في الرئيسية والفعاليات وذات الصلة */
function makeCard(i) {
  var border = "";
  if (isToday(i)) { border = " border-danger border-2"; }
  var s = '<div class="col-12 col-sm-6 col-lg-3 mb-4">';
  s += '<div class="card h-100 shadow-sm' + border + '">';
  s += '<img src="assets/img/ev' + (i + 1) + '.svg" class="card-img-top" alt="' + titles[i] + '" />';
  s += '<div class="card-body d-flex flex-column">';
  s += '<div class="mb-2">' + catBadge(i) + '</div>';
  s += '<h5 class="card-title">' + titles[i] + '</h5>';
  s += '<p class="small mb-1">📅 ' + dates[i] + ' — 📍 ' + places[i] + '</p>';
  s += '<p class="card-text">' + shorts[i] + '</p>';
  s += '<a class="btn btn-primary mt-auto" href="event.html?id=' + (i + 1) + '">التفاصيل</a>';
  s += '</div></div></div>';
  return s;
}

/* شريحة في السلايدر */
function makeSlide(i) {
  var s = '<div class="slide">';
  s += '<img src="assets/img/ev' + (i + 1) + '.svg" class="w-100" alt="' + titles[i] + '" />';
  s += '<div class="p-3 text-white slide-cap">' + catBadge(i);
  s += '<h3 class="mt-2">' + titles[i] + '</h3>';
  s += '<p class="mb-2">' + dates[i] + ' — ' + places[i] + '</p>';
  s += '<a class="btn btn-warning btn-sm" href="event.html?id=' + (i + 1) + '">التفاصيل</a>';
  s += '</div></div>';
  return s;
}

/* حفظ تفضيل التصنيف يُستدعى من روابط التصنيفات في الرئيسية */
function saveCat(c) { localStorage.setItem("cat", c); }

/* رقم بخانتين مثل 09 لرابط التقويم */
function hh(h) {
  if (h < 10) { return "0" + h; }
  return "" + h;
}

/* ===== الصفحة الرئيسية: السلايدر + أحدث الفعاليات ===== */
var cur = 0;   /* رقم الشريحة الحالية */

function showSlide(n) {
  var total = $(".slide").length;
  if (n >= total) { n = 0; }
  if (n < 0) { n = total - 1; }
  $(".slide").stop(true, true).hide();
  $(".slide").eq(n).fadeIn(500);
  cur = n;
}

/* تبديل تلقائي كل 4 ثوانٍ   */
function autoSlide() {
  showSlide(cur + 1);
  setTimeout("autoSlide()", 4000);
}

function initHome() {
  var s = "";
  for (var i = 0; i < COUNT; i++) {
    if (featured[i] == 1) { s += makeSlide(i); }
  }
  $("#slider").html(s);
  showSlide(0);
  setTimeout("autoSlide()", 4000);
  $("#prevBtn").click(function () { showSlide(cur - 1); });
  $("#nextBtn").click(function () { showSlide(cur + 1); });

  var l = "";
  for (var j = COUNT - 4; j < COUNT; j++) { l += makeCard(j); }
  $("#latest").html(l);
}

/* ===== صفحة الفعاليات: بحث وفلترة حسب التصنيف والموقع والتاريخ ===== */
function showEvents() {
  var q = $("#q").val();
  var c = $("#cat").val();
  var p = $("#place").val();
  var d = $("#date").val();
  var s = "";
  var n = 0;
  for (var i = 0; i < COUNT; i++) {
    var ok = true;
    if (q != "" && titles[i].indexOf(q) < 0 && shorts[i].indexOf(q) < 0) { ok = false; }
    if (c != "" && cats[i] != c) { ok = false; }
    if (p != "" && places[i] != p) { ok = false; }
    if (d != "" && dates[i] < d) { ok = false; }   /* من هذا التاريخ فصاعدًا */
    if (ok) { s += makeCard(i); n++; }
  }
  if (n == 0) {
    s = '<div class="col-12"><div class="alert alert-warning">لا توجد فعاليات مطابقة للبحث.</div></div>';
  }
  $("#list").html(s);
  $("#count").text(n);
  localStorage.setItem("cat", c);   /* حفظ تفضيل التصنيف */
}

function initEvents() {
  var saved = localStorage.getItem("cat");
  if (saved != null) { $("#cat").val(saved); }
  $("#q").keyup(function () { showEvents(); });
  $("#q").change(function () { showEvents(); });
  $("#cat").change(function () { showEvents(); });
  $("#place").change(function () { showEvents(); });
  $("#date").change(function () { showEvents(); });
  $("#resetBtn").click(function () {
    $("#q").val("");
    $("#cat").val("");
    $("#place").val("");
    $("#date").val("");
    showEvents();
  });
  showEvents();
}

/* ===== صفحة تفاصيل الفعالية ===== */
function initEvent() {
  var id = parseInt(location.search.substring(4));   
  if (isNaN(id) || id < 1 || id > COUNT) { id = 1; }
  var i = id - 1;
  $("title").text(titles[i] + " - دليل فعاليات الجامعة");

  var d = '<div class="row">';
  d += '<div class="col-lg-8 mb-3">';
  d += '<img src="assets/img/ev' + id + '.svg" class="w-100 rounded mb-3" alt="' + titles[i] + '" />';
  d += catBadge(i);
  d += '<h1 class="mt-2">' + titles[i] + '</h1>';
  d += '<p> ' + dates[i] + ' —  ' + times[i] + '</p>';
  d += '<p>' + longs[i] + '</p>';
  d += '<ul><li> المكان: ' + places[i] + '</li><li> الجهة المنظمة: ' + orgs[i] + '</li><li> الفئة المستهدفة: ' + auds[i] + '</li></ul>';
  d += '</div>';
  d += '<div class="col-lg-4 mb-3"><div class="card"><img src="assets/img/map.svg" class="card-img-top" alt="خريطة موقع الفعالية" />';
  d += '<div class="card-body"><h6 class="card-title mb-0"> ' + places[i] + '</h6></div></div></div>';
  d += '</div>';
  $("#detail").html(d);

  /* اضافة الفعالية للتقويم */
  var day = dates[i].replace(/-/g, "");
  var url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + titles[i];
  url += "&dates=" + day + "T" + hh(startH[i]) + "0000/" + day + "T" + hh(endH[i]) + "0000";
  url += "&location=" + places[i];
  $("#calBtn").attr("href", url);

  /* زر شارك  */
  $("#shareBtn").click(function () {
    $("#msg").html('<div class="alert alert-info">رابط الفعالية للمشاركة: <span dir="ltr">' + location.href + '</span></div>');
  });

  /* فعاليات ذات صلة: من نفس التصنيف أولًا ثم من غيره حتى 3 بطاقات */
  var r = "";
  var n = 0;
  for (var k = 0; k < COUNT; k++) {
    if (k != i && cats[k] == cats[i] && n < 3) { r += makeCard(k); n++; }
  }
  for (var m = 0; m < COUNT; m++) {
    if (m != i && cats[m] != cats[i] && n < 3) { r += makeCard(m); n++; }
  }
  $("#related").html(r);

  /* النافذة المنبثقة (Modal) لحجز مكان وهمي */
  $("#openBook").click(function () {
    $("#bname").val("");
    $("#bmsg").html("");
  });
  $("#bookBtn").click(function () {
    var name = $("#bname").val();
    if (name.replace(/\s/g, "") == "") {
      $("#bmsg").html('<div class="alert alert-danger">أدخل اسمك.</div>');
    } else {
      $("#bmsg").html('<div class="alert alert-success">تم حجز مكانك بنجاح ' + name + '.</div>');
    }
  });
}

/* ===== صفحة اتصل بنا ===== */
function initContact() {
  $("#cform").submit(function () {
    var n = $("#name").val();
    var m = $("#email").val();
    var t = $("#message").val();
    var ok = true;
    $("#name").removeClass("is-invalid");
    $("#email").removeClass("is-invalid");
    $("#message").removeClass("is-invalid");

    if (n.replace(/\s/g, "") == "") { $("#name").addClass("is-invalid"); ok = false; }
    if (m.search(/^[\w.]+@\w+(\.\w+)+$/) != 0) { $("#email").addClass("is-invalid"); ok = false; }
    if (t.replace(/\s/g, "") == "") { $("#message").addClass("is-invalid"); ok = false; }

    if (ok) {
      $("#msg").html('<div class="alert alert-success">تم إرسال رسالتك بنجاح. شكرًا لتواصلك!</div>');
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    } else {
      $("#msg").html('<div class="alert alert-danger">يرجى تعبئة جميع الحقول وكتابة بريد إلكتروني صحيح.</div>');
    }
    return false;  
  });
}

/* ===== التهيئة عند جهوزية الوثيقة ===== */
$(document).ready(function () {
  /* الوضع الداكن  */
  if (localStorage.getItem("dark") == "1") { $("body").addClass("dark"); }
  $("#darkBtn").click(function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) { localStorage.setItem("dark", "1"); }
    else { localStorage.setItem("dark", "0"); }
  });

  /* نستدعي دالة الصفحة الموجودة فقط */
  if ($("#slider").length > 0) { initHome(); }
  if ($("#list").length > 0) { initEvents(); }
  if ($("#detail").length > 0) { initEvent(); }
  if ($("#cform").length > 0) { initContact(); }
});
