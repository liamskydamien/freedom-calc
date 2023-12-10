import i18n from "i18next";
// @ts-ignore
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          //Personal Information Page
          personal_information: "Personal Information",
          firstname: "First Name",
          type_here: "Type here",
          surname: "Last Name",
          gender: "Gender",
          female: "Female",
          male: "Male",
          date_of_birth: "Date of Birth",
          expected_age: "Expected Age",
          currency: "Currency",
          eur: "Euro",
          vnd: "Vietnamese Dong",
          save_and_proceed: "Save and Proceed",

          //Starting Capital Page
          starting_capital: "Starting Capital",

          //Assets
          activa: "Assets",

          //Liquid Assets
          liquid_assets: "Liquid Assets",
          cash: "Cash",
          checking: "Available",
          savings: "Savings",
          other: "Other",
          preciousMetals: "Precious Metal",
          gold: "Gold",

          //Real Estate
          realestate: "Real Estate",
          occupied_properties: "Occupied Properties",
          rented_properties: "Rented Properties",
          commercial_properties: "Commercial Properties",
          agricultural_land_forest: "Agricultural Land Forest",
          forest: "Forest",
          agricultural_land: "Agricultural Land",
          funds: "Funds",
          real_estate_funds: "Real Estate Funds",

          //Stocks
          stocks: "Stocks",
          single_stocks: "Single Stocks",
          stock_funds: "Stocks Funds",
          fund: "Fund",
          etf: "ETF",
          derivative: "Derivative",
          corporate_participation: "Corporate Participation",
          active_corporate_participation: "Active Corporate Participation",
          passive_corporate_participation: "Passive Corporate Participation",

          //Cryptocurrency
          crypto_currency: "Cryptocurrency",
          bitcoin: "Bitcoin",
          ethereum: "Ethereum",

          //Other Assets
          other_assets: "Other Assets",
          art: "Art",
          collectibles: "Collectibles",
          claims: "Claims",
          insurance: "Insurance",

          //Liabilities
          passiva: "Liabilities",
          object_related_liabilities: "Object Related Liabilities",
          non_object_related_liabilities: "Non-object Related Liabilities",
          other_liabilities: "Other Liabilities",

          //Reserved Equity
          reserved_equity: "Reserved Equity",
          reserved_equity_for_consumption: "Reserved Equity for Consumption",
          reserved_equity_for_pension_provision:
            "Reserved Equity for Pension Provision",
          reserved_equity_for_other: "Reserved Equity for Other",

          //Balance Sheet
          starting_capital_display: "Starting Capital Display",
          liabilities: "Liabilities",
          Active: "Assets",
          balance_sheet: "Balance Sheet",
          crypto: "Crypto",
          reservedEquity: "Reserved Equity",
          total_capital: "Total Capital",

          //Save
          save_activa: "Save Assets",
          save_passiva: "Save Liabilities",
          save_starting_capital: "Save Starting Capital",

          //Life Phases Page
          lifephases: "Life Phases",
          life_phases: "Life Phases",
          no_life_phases: "Number of Life Phases",
          new_life_phase: "New Life Phase",
          selected_lifephase: "Selected Life Phase",
          name_of_phase: "Phase Name",
          start_of_phase: "Phase Start",
          end_of_phase: "Phase End",
          income: "Income",
          expenses: "Expenses",
          life_phase_graph: "Life Phase Graph",
          create_lifephases_first: "Create Life Phases First",
          save_proceed: "Save",
          cancel_clear: "Clear",

          //Add New Life Phase
          new_lifephase: "New Life Phase",
          //Income
          dependent: "Dependent",
          selfemployed: "Self-Employed",
          rentingIncome: "Renting Income",
          capitalIncome: "Capital Income",
          pensionIncome: "Pension Income",
          otherIncome: "Other Income",
          back: "Back",

          //Expenses
          taxes: "Taxes",
          rent: "Rent",
          consumption: "Consumption",
          Insurance: "Insurance",
          interest: "Interest",
          socialSecurity: "Social Security",
          maintenance: "Maintenance",
          otherCosts: "Other Costs",

          //Summary
          summary: "Summary",
          save: "Save",
          cancel: "Cancel",
          all_phases_successfully_set: "All Phases Successfully Set",

          //Point of Freedom Page
          pof: "Point of Financial Freedom",
          inflationrate: "Inflation Rate",
          expectedgrowth: "Expected Growth",
          pof_title: "Point of Financial Freedom",
          pof_achieved: "Point of Financial Freedom achieved at the age of",
          pof_achieved_age: "",
          recalculate_pof: "Recalculate PoF",

          //Custom Asset
          enter_custom_asset_allocation: "Custom Asset Allocation",
          precious_metals: "Precious Metals",
          real_estate: "Real Estate",

          optimisation: "Optimization",
          income_costs: "Income and Costs",

          //Optimisation Page
          how_risk_affine_are_you: "How risk affine are you?",
          how_would_you_describe_your_investment_experience: "How would you describe your investment experience?",
          no_experience: "No experience",
          some_experience: "Some investment experience",
          experienced: "Experienced through simple investments",
          highly_experienced: "Highly experienced through complex investments",
          how_do_you_react_when_your_investments_decrease_in_value: "How do you react when your investments decrease in value?",
          become_anxious_sell: "Become anxious and sell",
          concerned_wait: "Concerned, but I wait before I sell",
          hold_onto_my_investments: "I hold onto my investments",
          buy_more: "I see an opportunity to buy more",
          what_is_your_primary_goal_for_investing: "What is your primary goal for investing?",
          preserving_capital: "Preserving my capital",
          balance_between_growth_preservance: "A balance between growth and preservation",
          growth_but_no_large_losses: "Growth, but I want no large losses",
          maximize_growth: "Maximize growth, even when I have to except losses",
          how_long_is_your_investment_horizon: "How long is your investment horizon?",
          less_than_2_years: "Less than 2 years",
          between_2_and_5_years: "Between 2 and 5 years",
          between_5_and_10_years: "Between 5 and 10 years",
          more_than_10_years: "More than 10 years",
          suddendrop_in_a_short_period: "What would you do if your investments suddendly drop in 20% value?",
          sell_immidialty: "Sell immidialty to prevent further losses",
          wait_and_sell: "Wait and sell if the situation does not improve",
          keep_it: "Keep it, because I believe in the long-term growth",
        },
      },

      de: {
        translation: {
          //Personal Information Page
          personal_information: "Persönliche Informationen",
          firstname: "Vorname",
          type_here: "Hier eingeben",
          surname: "Nachname",
          gender: "Geschlecht",
          female: "Frau",
          male: "Mann",
          date_of_birth: "Geburtsdatum",
          expected_age: "Erwartetes Alter",
          currency: "Währung",
          eur: "Euro",
          vnd: "Vietnamesischer Dong",
          save_and_proceed: "Speichern und Fortfahren",

          //Starting Capital Page
          starting_capital: "Startkapital",

          //Assets
          activa: "Vermögenswerte",

          //Liquid Assets
          liquid_assets: "Liquide Mittel",
          cash: "Bargeld",
          checking: "Girokonto",
          savings: "Sparkonto",
          other: "Andere",
          preciousMetals: "Edelmetalle",
          gold: "Gold",

          //Real Estatee
          realestate: "Immobilien",
          occupied_properties: "Bewohnte Immobilien",
          rented_properties: "Vermietete Immobilien",
          commercial_properties: "Gewerbeimmobilien",
          agricultural_land_forest: "Landwirtschaftlich genutzte Fläche & Wald",
          forest: "Wald",
          agricultural_land: "Agrarland",
          funds: "Fonds",
          real_estate_funds: "Immobilienfonds",

          //Stocks
          stocks: "Aktien",
          single_stocks: "Einzelne Aktien",
          stock_funds: "Aktienfonds",
          fund: "Fonds",
          etf: "ETFs",
          derivative: "Derivate",
          corporate_participation: "Unternehmensbeteiligungen",
          active_corporate_participation: "Aktive Unternehmensbeteiligung",
          passive_corporate_participation: "Passive Unternehmensbeteiligung",

          //Cryptocurrency
          crypto_currency: "Kryptowährungen",
          bitcoin: "Bitcoin",
          ethereum: "Ethereum",

          //Other Assets
          other_assets: "Sonstige Vermögenswerte",
          art: "Kunst",
          collectibles: "Sammlerstücke",
          claims: "Ansprüche",
          insurance: "Versicherungen",

          //Liabilities
          passiva: "Verbindlichkeiten",
          object_related_liabilities: "Objektbezogene Verbindlichkeiten",
          non_object_related_liabilities: "Nicht objektbezogene Verbindlichkeiten",
          other_liabilities: "Sonstige Verbindlichkeiten",

          //Reserved Equity
          reserved_equity: "Reserviertes Eigenkapital",
          reserved_equity_for_consumption: "Reserviertes Eigenkapital für den Konsum",
          reserved_equity_for_pension_provision: "Reserviertes Eigenkapital für die Altersvorsorge",
          reserved_equity_for_other: "Reserviertes Eigenkapital für Privatverbrauch",

          //Balance Sheet
          starting_capital_display: "Startkapital",
          liabilities: "Verbindlichkeiten",
          Active: "Vermögenswerte",
          balance_sheet: "Bilanz",
          crypto: "Kryptowährungen",
          reservedEquity: "Reserviertes Eigenkapital",
          total_capital: "Gesamtkapital",

          //Save
          save_activa: "Aktiva Speichern",
          save_passiva: "Passiva Speichern",
          save_starting_capital: "Speichern",

          //Life Phases Page
          lifephases: "Lebensphasen",
          life_phases: "Lebensphasen",
          no_life_phases: "Keine Lebensphasen vorhanden",
          new_life_phase: "Neue Lebenspase erstellen",
          selected_lifephase: "Ausgewählte Lebensphase",
          name_of_phase: "Name der Lebensphase",
          start_of_phase: "Beginn der Lebensphase",
          end_of_phase: "Ende der Lebensphase",
          income: "Einkommen",
          expenses: "Ausgaben",
          life_phase_graph: "Lebensphasen Graph",
          create_lifephases_first: "Erstellen Sie zunächst eine Lebensphase",
          save_proceed: "Speichern",
          cancel_clear: "Zurücksetzen & Schließen",

          //Add New Life Phase
          new_lifephase: "Neue Lebensphase erstellen",
          //Income
          dependent: "Abhängiges Einkommen",
          selfemployed: "Selbstständiges Einkommen",
          rentingIncome: "Mieteinnahmen",
          capitalIncome: "Kapitaleinkommen",
          pensionIncome: "Renteneinkommen",
          otherIncome: "Anderes Einkommen",
          back: "Zurücksetzen",

          //Expenses
          taxes: "Steuern",
          rent: "Mieten",
          consumption: "Verbrauch",
          Insurance: "Versicherung",
          interest: "Zinsen",
          socialSecurity: "Sozial Versicherungen",
          maintenance: "Instandhaltung",
          otherCosts: "Sonstige Kosten",

          //Summary
          summary: "Zusammenfassung",
          save: "Speichern",
          cancel: "Stornieren",
          all_phases_successfully_set: "Alle Phasen erfolgreich eingestellt",

          //Point of Freedom Page
          pof: "Punkt der finanziellen Freiheit",
          inflationrate: "Inflationsrate",
          expectedgrowth: "Erwartetes Wachstum",
          pof_title: "Punkt der finanziellen Freiheit",
          pof_achieved: "Punkt der finanziellen Freiheit erreicht im Alter von",
          pof_achieved_age: "",
          recalculate_pof: "PoF neu berechnen",

          //Custom Asset
          enter_custom_asset_allocation:
            "Benutzerdefinierte Vermögenszuteilung",
          precious_metals: "Edelmetalle",
          real_estate: "Immobilie",

          income_costs: "Einkommen und Kosten",
          optimisation: "Optimierung",

          //Optimisation Page
          how_risk_affine_are_you: "Wie risikoaffin sind Sie?",
          how_would_you_describe_your_investment_experience: "Wie würden Sie Ihre Anlageerfahrung beschreiben?",
          no_experience: "Keine Erfahrung",
          some_experience: "Einige Anlageerfahrung",
          experienced: "Erfahren durch einfache Investitionen",
          highly_experienced: "Hocherfahren durch komplexe Investitionen",
          how_do_you_react_when_your_investments_decrease_in_value: "Wie reagieren Sie, wenn Ihre Investitionen an Wert verlieren?",
          become_anxious_sell: "Werden ängstlich und verkaufen",
          concerned_wait: "Besorgt, aber ich warte bevor ich verkaufe",
          hold_onto_my_investments: "Ich halte an meinen Investitionen fest",
          buy_more: "Ich sehe eine Gelegenheit, mehr zu kaufen",
          what_is_your_primary_goal_for_investing: "Was ist Ihr primäres Anlageziel?",
          preserving_capital: "Mein Kapital erhalten",
          balance_between_growth_preservance: "Ein Gleichgewicht zwischen Wachstum und Erhaltung",
          growth_but_no_large_losses: "Wachstum, aber ich möchte keine großen Verluste",
          maximize_growth: "Wachstum maximieren, auch wenn ich Verluste hinnehmen muss",
          how_long_is_your_investment_horizon: "Wie lang ist Ihr Anlagehorizont?",
          less_than_2_years: "Weniger als 2 Jahre",
          between_2_and_5_years: "Zwischen 2 und 5 Jahren",
          between_5_and_10_years: "Zwischen 5 und 10 Jahren",
          more_than_10_years: "Mehr als 10 Jahre",
          suddendrop_in_a_short_period: "Was würden Sie tun, wenn Ihre Investitionen plötzlich um 20% an Wert verlieren?",
          sell_immidialty: "Sofort verkaufen, um weitere Verluste zu verhindern",
          wait_and_sell: "Warten und verkaufen, wenn sich die Situation nicht bessert",
          keep_it: "Behalten, weil ich an das langfristige Wachstum glaube",
        },
      },
      vn: {
        translation: {
          //Personal Information Page
          personal_information: "Thông Tin Cá Nhân",
          firstname: "Tên",
          type_here: "Nhập vào đây",
          surname: "Họ",
          gender: "Giới Tính",
          female: "Nữ",
          male: "Nam",
          date_of_birth: "Ngày Sinh",
          expected_age: "Tuổi Dự Kiến",
          currency: "Tiền Tệ",
          eur: "Euro",
          vnd: "Việt Nam Đồng",
          save_and_proceed: "Lưu và Tiếp Tục",

          //Starting Capital Page
          starting_capital: "Vốn Ban Đầu",

          //Assets
          activa: "Tài Sản",

          //Liquid Assets
          cash: "Tiền Mặt",
          liquid_assets: "Tài Sản Lưu Động",
          checking: "Tiền Hiện Có",
          savings: "Tiết Kiệm",
          other: "Khác",
          preciousMetals: "Kim Loại Quý",
          gold: "Vàng",

          //Real Estate
          realestate: "Bất Động Sản",
          occupied_properties: "Tài Sản Sỡ Hữu",
          rented_properties: "Tài Sản Thuê",
          commercial_properties: "Tài Sản Thương Mai",
          agricultural_land_forest: "Đất Rừng Nông Nghiệp",
          forest: "Rừng",
          agricultural_land: "Đất Nông Nghiệp",
          funds: "Quỹ",
          real_estate_funds: "Quỹ Bất Động Sản",

          //Stocks
          stocks: "Cổ Phiếu",
          single_stocks: "Cổ Phiếu Lẻ",
          stock_funds: "Quỹ Cổ Phiếu",
          fund: "Quỹ",
          etf: "ETF",
          derivative: "Phái Sinh",
          corporate_participation: "Tham Gia Doanh Nghiệp",
          active_corporate_participation: "Tham Gia Doanh Nghiệp Chủ Động",
          passive_corporate_participation: "Tham Gia Doanh Nghiệp Bị Động",

          //Cryptocurrency
          crypto_currency: "Tiền Điện Tử",
          bitcoin: "Bitcoin",
          ethereum: "Ethereum",

          //Other Assets
          other_assets: "Tài Sản Khác",
          art: "Tranh",
          collectibles: "Sưu Tầm",
          claims: "Claims",
          insurance: "Bảo Hiểm",

          //Liabilities
          passiva: "Nợ Phải Trả",
          object_related_liabilities: "Nợ Liên Quan tới Đối Tượng",
          non_object_related_liabilities: "Nợ Không Liên Quan tới Đối Tượng",
          other_liabilities: "Nợ Khác",

          //Reserved Equity
          reserved_equity: "Vốn Cổ Phần Dự Trữ",
          reserved_equity_for_consumption: "Vốn Cổ Phần Dự Trữ Tiêu Thụ",
          reserved_equity_for_pension_provision: "Vốn Cổ Phần Dự Trữ Lương Hưu",
          reserved_equity_for_other: "Vốn Cổ Phần Dự Trữ Khác",

          //Balance Sheet
          starting_capital_display: "Hiển Thị Vốn Ban Đầu",
          liabilities: "Nợ Phải Trả",
          Active: "Tài Sản",
          balance_sheet: "Bảng Cân Đối Kế Toán",
          crypto: "Crypto",
          reservedEquity: "Vốn Cổ Phần Dự Trữ",
          total_capital: "Toàn Bộ Vốn",

          //Save
          save_activa: "Lưu Tài Sản",
          save_passiva: "Lưu Nợ Phải Trả",
          save_starting_capital: "Lưu Vốn Ban Đầu",

          //Life Phases Page
          lifephases: "Giai Đoạn Cuộc Sống",
          life_phases: "Giai Đoạn Cuộc Sống",
          no_life_phases: "Số Giai Đoạn Cuộc Sống",
          new_life_phase: "Giai Đoạn Sống Mới",
          selected_lifephase: "Giai Đoạn Sống Đang Chọn",
          name_of_phase: "Tên Giai Đoạn",
          start_of_phase: "Giai Đoạn Bắt Đầu",
          end_of_phase: "Giao Đoạn Kết Thúc",
          income: "Thu Nhập",
          expenses: "Chi Phí",
          life_phase_graph: "Đồ Thị Giai Đoạn Sống",
          create_lifephases_first: "Hãy Tạo Giai Đoạn Sống Trước Tiên",
          save_proceed: "Lưu",
          cancel_clear: "Xóa",

          //Add New Life Phase
          new_lifephase: "Giai Đoạn Cuộc Sống Mới",
          //Income
          dependent: "Phụ Thuộc",
          selfemployed: "Tự Kinh Doanh",
          rentingIncome: "Thu Nhập cho Thuê",
          capitalIncome: "Thu Nhập Vốn",
          pensionIncome: "Thu Nhập Hưu Trí",
          otherIncome: "Thu Nhập Khác",
          back: "Trở Về",

          //Expenses
          taxes: "Thuế",
          rent: "Tiền Thuê",
          consumption: "Tiêu Hao",
          Insurance: "Bảo Hiểm",
          interest: "Lãi Suất",
          socialSecurity: "An Ninh Xã Hội",
          maintenance: "Bảo Trì",
          otherCosts: "Chi Phí Khác",

          //Summary
          summary: "Tóm Tắt",
          save: "Lưu",
          cancel: "Hủy Bỏ",
          all_phases_successfully_set: "Mọi Giai Đoạn đã được thiết lập",

          //Point of Freedom Page
          pof: "Điểm Tự Do Tài Chính",
          inflationrate: "Tỷ Lệ Lạm Phát",
          expectedgrowth: "Tăng Trưởng Dự Kiến",
          pof_title: "Điểm Tự Do Tài Chính",
          pof_achieved: "Điểm Tự Do Tài Chính đạt được lúc ",
          pof_achieved_age: "tuổi",
          recalculate_pof: "Tính Toán Lại Điểm Tự Do Tài Chính",

          //Custom Asset
          enter_custom_asset_allocation: "Phân Bổ Tài Sản Tùy Chỉnh",
          precious_metals: "Kim Loại Quý ",
          real_estate: "Bất Động Sản",

          income_costs: "Thu Nhập và Chi Phí",
          optimisation: "Tối Ưu Hóa",

          //Optimisation Page
          how_risk_affine_are_you: "Bạn có mạo hiểm đến mức nào?",
          how_would_you_describe_your_investment_experience: "Bạn sẽ mô tả kinh nghiệm đầu tư của mình như thế nào?",
          no_experience: "Không có kinh nghiệm",
          some_experience: "Có một số kinh nghiệm đầu tư",
          experienced: "Có kinh nghiệm thông qua các khoản đầu tư đơn giản",
          highly_experienced: "Rất nhiều kinh nghiệm thông qua các khoản đầu tư phức tạp",
          how_do_you_react_when_your_investments_decrease_in_value: "Bạn phản ứng như thế nào khi giá trị đầu tư của bạn giảm?",
          become_anxious_sell: "Lo lắng và bán ra",
          concerned_wait: "Lo ngại, nhưng tôi sẽ chờ trước khi bán",
          hold_onto_my_investments: "Tôi giữ nguyên khoản đầu tư",
          buy_more: "Tôi thấy đây là cơ hội để mua thêm",
          what_is_your_primary_goal_for_investing: "Mục tiêu chính của bạn khi đầu tư là gì?",
          preserving_capital: "Bảo toàn vốn",
          balance_between_growth_preservance: "Cân bằng giữa tăng trưởng và bảo toàn",
          growth_but_no_large_losses: "Tăng trưởng, nhưng tôi không muốn rủi ro lớn",
          maximize_growth: "Tối đa hóa tăng trưởng, dù phải chấp nhận rủi ro",
          how_long_is_your_investment_horizon: "Chu kỳ đầu tư của bạn dài bao lâu?",
          less_than_2_years: "Ít hơn 2 năm",
          between_2_and_5_years: "Từ 2 đến 5 năm",
          between_5_and_10_years: "Từ 5 đến 10 năm",
          more_than_10_years: "Hơn 10 năm",
          suddendrop_in_a_short_period: "Bạn sẽ làm gì nếu giá trị đầu tư của bạn đột ngột giảm 20%?",
          sell_immidialty: "Bán ngay để ngăn chặn thêm tổn thất",
          wait_and_sell: "Chờ đợi và bán nếu tình hình không cải thiện",
          keep_it: "Giữ lại, vì tôi tin vào sự tăng trưởng lâu dài",

        },
      },
    },
  })
  .then((r) => console.log(r));
export default i18n;
