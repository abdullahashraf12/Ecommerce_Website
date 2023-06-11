BEGIN
  DBMS_SCHEDULER.DROP_JOB(job_name => 'My_job');
END;
/