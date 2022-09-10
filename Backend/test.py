import csv
import json

csvfile = open('FakeNames.csv', 'r')
jsonfile = open('file.json', 'w')

fieldnames = ("Number","Gender","NameSet","Title","GivenName","MiddleInitial","Surname","StreetAddress","City","State","StateFull","ZipCode","Country","CountryFull","EmailAddress","Username","Password","BrowserUserAgent","TelephoneNumber","TelephoneCountryCode","MothersMaiden","Birthday","Age","TropicalZodiac","CCType","CCNumber","CVV2","CCExpires","NationalID","UPS","WesternUnionMTCN","MoneyGramMTCN","Color","Occupation","Company","Vehicle","Domain","BloodType","Pounds","Kilograms","FeetInches","Centimeters","GUID","Latitude","Longitude")
reader = csv.DictReader( csvfile, fieldnames)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',\n')