use Aquabike;
CREATE EVENT UpdatePayment
  ON SCHEDULE
    EVERY 1 DAY
    STARTS (TIMESTAMP(CURRENT_DATE) + INTERVAL 1 DAY + INTERVAL 1 HOUR)
  DO
	UPDATE payement SET finish = '1' WHERE ( end_date = NOW());